import { NextApiRequest, NextApiResponse } from "next";

import getThumbnailTemplate from "./_lib/thumbTemplate";

export default function (req: NextApiRequest, res: NextApiResponse) {
    try {
        const title = String(req.query.title)

        if (!title) {
            throw new Error("Title is required");
        }

        const html = getThumbnailTemplate(title);
    
        res.setHeader('Content-Type', 'text/html');
        
        return res.end(html);

    } catch (error) {
        console.log(error);

        res.status(500).send('Internal server error')
    }
}