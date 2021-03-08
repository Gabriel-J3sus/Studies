import { NextApiRequest, NextApiResponse } from "next";
import connect from '../../utils/database';

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  _id: string;
  name: string;
  email: string;
  cellphone: string;
  teacher: boolean;
}


export default async (req: NextApiRequest, res: NextApiResponse<ErrorResponseType | SuccessResponseType>) => {
  
  if (req.method === 'POST') {
    const { name, email, cellphone, teacher } = req.body;
    
    if (!name || !email || !cellphone || typeof(teacher) !== "boolean" || teacher === null) {
      return res.status(400).json({ error: 'Missing data' })
    }
    
    const { db } = await connect();

    const response = await db.collection('users').insertOne({
      name, 
      email, 
      cellphone, 
      teacher,
    })
    
    res.status(200).json(response.ops[0])
  } else {
    return res.status(400).json({error: "Wrong requested method"})

  } 
}
