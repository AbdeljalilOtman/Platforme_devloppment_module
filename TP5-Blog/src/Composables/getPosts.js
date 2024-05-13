import { projectFirestore } from '../Firebase/Config';

const importArticle = async () => {

    let res = await projectFirestore.collection('Articles').get()
    return res.docs.map(doc=> {
            return {...doc.data(),id:doc.id }})
      
};

export default importArticle;
