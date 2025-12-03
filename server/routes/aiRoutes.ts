import express from "express"
import { auth } from "../middlewares/auth.ts";
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/aiController.ts";
import { upload } from "../configs/multer.ts";

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle)
aiRouter.post('/generate-blog-title', auth, generateBlogTitle)
aiRouter.post('/generate-image', auth, generateImage)
aiRouter.post('/remove--background', upload.single('image'), auth, removeImageBackground)
aiRouter.post('/remove-object', upload.single('single'), auth, removeImageObject)
aiRouter.post('/review-resume', upload.single('resume'), auth, resumeReview)


export default aiRouter;