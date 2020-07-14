const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile');
const User = require('../../models/user');
const Post = require('../../models/Post');
const {check, validationResult} = require('express-validator');
const config = require('config');
const axios = require('axios');


router.get("/me", auth, async(req, res) => {
    try{
        const profile = await Profile.findOne({ user : req.user.id}).populate(
            'user',['name', 'avatar']
        );
        if(!profile){
            return res.status(400).json({msg:'User profile not found'});
        }
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.post("/", [auth, 
        [
            check('status', 'Status Required').not().isEmpty(),
            check('skills', "Skills are required").not().isEmpty()
        ]
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array() });
        }

        const{
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin
        } = req.body

        const profileFields = {};
        profileFields.user = req.user.id;
        if(company) profileFields.company = company;
        if(website) profileFields.website = website;
        if(location) profileFields.location = location;
        if(bio) profileFields.bio = bio;
        if(status) profileFields.status = status;
        if(githubusername) profileFields.githubusername = githubusername;
        if (skills) {
            try{profileFields.skills = skills.split(',').map(skill => skill.trim());}
            catch(err){
                console.error(err.message);
                res.status(500).send('Server Error');}
        }
        
        profileFields.social = {};
        if(youtube)  profileFields.social.youtube = youtube;
        if(twitter)  profileFields.social.twitter = twitter;
        if(facebook)  profileFields.social.facebook = facebook;
        if(linkedin)  profileFields.social.linkedin = linkedin;
        if(instagram)  profileFields.social.instagram = instagram;

        try{
            let profile = await Profile.findOne({user:req.user.id});
            if(profile){
                profile = await Profile.findOneAndUpdate(
                    {user: req.user.id},
                    {$set : profileFields},
                    {new: true}
                );
                return res.json(Profile);
            }
            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.get("/user/:user_id", 
    async ({ params: { user_id } }, res) => {
        try {
            const profile = await Profile.findOne({user: user_id}).populate('user', ['name', 'avatar']);
            if(!profile){
                return res.status(400).json({msg: "User profile not found"});
            }
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            if(err.kind == 'ObjectId'){
                return res.status(400).json({msg: "User profile not found"});
            }
            res.status(500).send('Server Error');
        }
    }
)

router.delete("/", auth,  async (req, res) => {
    try {
        await Post.deleteMany({user: req.user.id})
        await Profile.findOneAndRemove({user: req.user.id}) //Remove Profile
        await User.findOneAndRemove({_id: req.user.id}) //Remove User
        res.json({msg : 'User deleted'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/experience', 
    [
        auth,
        [
            check('title', 'Title is required').not().isEmpty(),
            check('company', 'Company is required').not().isEmpty(),
            check('from', 'From date is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }

        const{
            title,
            company,
            location,
            from,
            to,
            current,
            description
        } = req.body

        const newExp = {
            title : title,
            company : company,
            location : location,
            from : from,
            to : to,
            current : current,
            description : description
        }

        try {
            const profile = await Profile.findOne({user: req.user.id});
            profile.experience.unshift(newExp);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    }
)

router.delete('/experience/:exp_id', auth, async(req, res) => {
    try {
        const profile = await Profile.findOne({user : req.user.id});
        const removeIndex = profile.experience.map(item=>item.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex, 1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/education', 
    [
        auth,
        [
            check('school', 'School is required').not().isEmpty(),
            check('degree', 'Degree is required').not().isEmpty(),
            check('fieldofstudy', 'Field of study is required').not().isEmpty(),
            check('from', 'From date is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }

        const{
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        } = req.body

        const newEdu = {
            school: school,
            degree: degree,
            fieldofstudy: fieldofstudy,
            from : from,
            to : to,
            current : current,
            description : description
        }

        try {
            const profile = await Profile.findOne({user: req.user.id});
            profile.education.unshift(newEdu);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

router.delete('/education/:edu_id', auth, async(req, res) => {
    try {
        const foundProfile = await Profile.findOne({ user: req.user.id });
        const eduIds = foundProfile.education.map(edu => edu._id.toString());
        const removeIndex = eduIds.indexOf(req.params.edu_id);
        if (removeIndex === -1) {
            return res.status(500).json({ msg: "Server error" });
        } else { 
            foundProfile.education.splice(removeIndex,1);
            await foundProfile.save();
            res.json({ msg: 'Education Deleted'})
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server error" });
    }   
})

router.get('/github/:username', async (req, res) => {
    try {
      const uri = encodeURI(
        `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
      );
      const headers = {
        'user-agent': 'node.js',
        Authorization: `token ${config.get('githubToken')}`
      };
  
      const gitHubResponse = await axios.get(uri, { headers });
      return res.json(gitHubResponse.data);
    } catch (err) {
      console.error(err.message);
      return res.status(404).json({ msg: 'No Github profile found' });
    }
  });


module.exports = router;















