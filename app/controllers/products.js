var nodemailer = require('nodemailer');
var Products = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];
    
    this.sendMail = function(req, resp,pms){
    var self = this;
    console.log("Initiating mail...");
    geddy.model.Product.first(pms.id, function(err, product) {
      if (err) {
        throw err;
      }
      
      pms.isOrderPlaced = true;
        product.updateProperties(pms);

        if (!product.isValid()) {
          self.respondWith(product);
        }
        else {
          product.save(function(err, data) {
            if (err) {
              throw err;
            }
            self.respondWith(product);
          });
        }
      });
    };
    
    this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Product.all(function(err, products) {
      if (err) {
        throw err;
      }
      self.respondWith(products, {type:'Product'});
    });
  };

  this.add = function (req, resp, params) { 
    var self = this;
      self.respond({params: params});
   
  };

    this.billProduct = function(req, resp, params){
       var self = this;
        geddy.model.Product.all(function(err, products) {
          if (err) {
            throw err;
          }
          self.respondWith(products, {type:'Product'});
        });

    };
    
    this.addCart = function(req, resp, params){
        var self = this;
        
        geddy.model.Product.first(params.id, function(err, product) {
              if (err) {
                throw err;
              }
              if (!product) {
                throw new geddy.errors.NotFoundError();
              }
              else {
                geddy.cartItems.push(product);
                self.respondWith(geddy.cartItems, {type:'Product'});
              }
        });
        
    };
    
    this.deduct = function(req, resp, params){
       var self = this;
        console.log("Billing product");
        geddy.model.Product.all(function(err, products) {
          if (err) {
            throw err;
          }
          self.respondWith(products, {type:'Product'});
        });

    };
    
  this.create = function (req, resp, params) {
    var self = this;

    geddy.model.Product.all(function(err, products) {


     params.productId = 100000 +(products.length+1);

      console.log("Create product id::::::::"+params.productId);
     
      var product = geddy.model.Product.create({
        name : params.name,
        quantity : params.quantity,
        expiryDate : params.expiryDate,
        productId : params.productId
      });

    if (!product.isValid()) {
      self.respondWith(product);
    }
    else {
      product.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(product, {status: err});
      });
    }

    });
    
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      if (!product) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(product);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      if (!product) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(product);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;
      
    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      product.updateProperties(params);

      if (!product.isValid()) {
        self.respondWith(product);
      }
      else {
        product.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(product, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Product.first(params.id, function(err, product) {
      if (err) {
        throw err;
      }
      if (!product) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Product.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(product);
        });
      }
    });
  };
    
};

exports.Products = Products;
