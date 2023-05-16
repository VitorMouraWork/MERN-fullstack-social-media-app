import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getUserFollowing = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
    
        const following = await Promise.all(
        user.following.map((id) => User.findById(id))
        );
        const formattedfollowing = following.map(
            ({ _id, username, displayName, pfpPath, bannerPath, bio, tags, followers, location, occupation}) => {
                return { _id, username, displayName, pfpPath, bannerPath, bio, tags, followers, location, occupation };
            }
        );
        res.status(200).json(formattedfollowing);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */

export const addRemoveFollow = async (req, res) => {
    try { 
        const { id, followId} = req.params;
        const user = await User.findById(id);
        const follow = await User.findById(followId);

        if (user.following.includes(followId)) {
            user.following = user.following.filter((id) => id !== followId)
        } else {
            user.following.push(followId);
        }
        await user.save();
        await follow.save();

        const following = await Promise.all(
            user.following.map((id) => User.findById(id))
            );
            const formattedfollowing = following.map(
                ({ _id, username, displayName, pfpPath, bannerPath, bio, tags, followers, location, occupation}) => {
                    return { _id, username, displayName, pfpPath, bannerPath, bio, tags, followers, location, occupation };
                }
            );

            res.status(200).json(formattedfollowing);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}