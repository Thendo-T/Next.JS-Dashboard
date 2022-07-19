const cardModel = require('../../models/card.modal');

export default function handler(req, res) {
  if (req.method === 'GET') {
    cardModel.find()
      .then(card => {
        res.status(200).json(card);
      })
      .catch(e => {
        res.status(500).json({msg: 'something went wrong'});
      })
    
  } else if(req.method === 'POST'){

    if(!req.body) {
      res.status(200).json({msg: 'plese pass a valid body'});
      return;
    }

    const card = new cardModel({
      text: req.body.text,
      imageUri: req.body.imageUri
    })

    card
      .save(card)
      .then(data => res.status(200).json({msg: 'data saved'}))
      .catch(e => res.status(500).json({msg: 'something went wrong'}));

  }
}
