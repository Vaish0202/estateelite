import { errorhandle } from "../Utils/error.js";
import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
        
    } catch (error) {
        next(error)
    }
}
export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if(!listing){
        return next(errorhandle(404, 'Lisitng not found'));
    }

    if(req.user.id !== listing.userRef) {
        return next(errorhandle(401, 'You can only delelte your own properties'));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted');
    } catch (error) {
        next(error)
    }
}
export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if(!listing){
        return next(errorhandle(404, 'Lisitng not found'));
    }

    if(req.user.id !== listing.userRef) {
        return next(errorhandle(401, 'You can only delelte your own properties'));
    }

    try {
        const updatedLisiting = await Listing.findByIdAndUpdate(req.params.id,
            req.body,
            {
                new: true
            });
        res.status(200).json(updatedLisiting);
    } catch (error) {
        next(error)
    }
}

export const getListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if(!listing){
            return next(errorhandle(404, 'Lisitng not found'));
        }

        res.status(200).json(listing);
    } catch (error) {
        next(error)
    }
}