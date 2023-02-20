const Book=require('../model/Book');

const getAllBooks=async(req,res)=>{
    try{
        const books=await Book.find();
        if(books.length===0){
            return res.status(400).json({
                error:"Books Not Found !!!"
            });
        }
        res.status(200).json({books});
    }catch(e){
        res.status(400).json({
            error:e.message
        });
    }
}

const getById=async(req,res)=>{
    const id=req.params.id;
    try{
        const book=await Book.findById(id);
        if(!book){
            return res.status(400).json({error:"No Book Found"});
        }
        res.status(200).json({book});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

const addBooks=async(req,res)=>{
    const {name,author,description,price,available,image}=req.body;
    try{
        const book=await Book.create({name,author,description,price,available,image});
        if(!book){
            return res.status(400).json({error:"Unable to Add"});
        }
        res.status(201).json({book});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

const updateBook=async(req,res)=>{
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    try{
        const book=await Book.findByIdAndUpdate(id,{name,author,description,price,available,image});
        if(!book){
            res.status(400).json({error:"Unable to update by this ID"});
        }
        const updatedBook=await Book.findById(id);
        res.status(200).json({book:updatedBook});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

const deleteBook=async(req,res)=>{
    const id=req.params.id;
    try{
        const book=await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(400).json({error:"Unable to delete by this ID"});
        }
        res.status(200).json({message: "Book Deleted Successfully"});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

exports.getAllBooks=getAllBooks;
exports.getById=getById;
exports.addBooks=addBooks;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;