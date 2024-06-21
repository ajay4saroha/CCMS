import Enquiry from "../models/Enquiry.model.js"


export const newEnquiry = async (req, res) => {
    try {
        const { name, fatherName, mobile, parentMobile, qualification, address } = req.body;
        
        let alreadyRegistered = false;
        const enquiry = await Enquiry.find({ name });

        enquiry?.forEach(i => {
            if (i.fatherName === fatherName && i.mobile === mobile && i.parentMobile === parentMobile && i.qualification === qualification) {
                alreadyRegistered = true;
            }
        });

        if (alreadyRegistered) {
            return res.status(404).json({error: 'Your Enquiry has already been submitted'})
        }

        const newEnquiry = new Enquiry({
            name,
            fatherName,
            mobile,
            parentMobile,
            qualification,
            address
        })

        await newEnquiry.save();
        return res.status(200).json({ newEnquiry });
    } catch (error) {
        console.log("Error in New Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const getAllEnquiries = async (req, res) => {
    try {
        const allEnquiries = await Enquiry.find();
        return res.status(200).json(allEnquiries);

    } catch (error) {
        console.log("Error in all Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const deleteEnquiry = async (req, res) => {
    try{
        const enquiryToDelete = req.body;

        const Id = enquiryToDelete._id;

        const enquiry = await Enquiry.findByIdAndDelete(Id);

        if(!enquiry){
            return res.status(404).json({ error: "Enquiry not found"});
        }

        return res.status(200).json(enquiry);

    }catch(error){
        console.log("Error in Delete Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateEnquiry = async (req, res) => {
    try {
        const enquiryToUpdate = req.body;

        const Id = enquiryToUpdate._id;
        const enquiry = await Enquiry.findByIdAndUpdate(Id,{
            name: enquiryToUpdate.name,
            fatherName: enquiryToUpdate.fatherName,
            mobile:enquiryToUpdate.mobile,
            parentMobile:enquiryToUpdate.parentMobile,
            qualification:enquiryToUpdate.qualification,
            address:enquiryToUpdate.address,
            status:enquiryToUpdate.status
        },
        {new:true}
        )
        if(!enquiry){
            return res.status(400).json({error:"Enquiry Not Found"});
        }

        return res.status(200).json(enquiry)
        
    } catch (error) {
        console.log("Error in Update Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}