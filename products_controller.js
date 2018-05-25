// products controller

module.exports = {
  // POST*
  create: (req, res) => {
    console.log('creating product');
    const db = req.app.get('db');
    let { name, description, price, image_url } = req.body;

    db.create_product( [name, description, price, image_url] )
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  // GET*
  getOne: (req, res) => {
    console.log('getting one product');
    const db = req.app.get('db');

    db.read_product( [req.params.id] )
    .then( product => res.status(200).send( product ) )
    .catch( () => res.status(500).send() );
  },

  // GET*
  getAll: (req, res) => {
    console.log('getting all products');
    const db = req.app.get('db');

    db.read_products()
    .then( products => { res.status(200).send(products); } )
    .catch( () => res.status(500).send() );
  },

  // PUT*
  update: (req, res) => {
    console.log('updating product');
    const db = req.app.get('db');

    db.update_product( [req.params.id, req.query.desc] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },

  // DELETE*
  delete: (req, res) => {
    console.log('deleting product');
    const db = req.app.get('db');

    db.delete_product( [req.params.id] )
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  }
}
