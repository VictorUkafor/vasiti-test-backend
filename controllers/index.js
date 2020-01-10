


export const createTodo = async(req, res) => {
    try{

    }catch(e){
        return res.status(500).send({
            errors: { message: 'Internal server error', e }
        })
    }
}