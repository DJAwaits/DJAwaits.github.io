"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

var cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World!');
}); //mongodb

var _require = require('mongodb'),
    MongoClient = _require.MongoClient,
    ServerApiVersion = _require.ServerApiVersion;

var uri = "mongodb+srv://ramrage13:PanesarR07@cluster.o7dqysb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"; // Create a MongoClient with a MongoClientOptions object to set the Stable API version

var client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

function run() {
  var bookCollection, movieCollection, animangaCollection;
  return regeneratorRuntime.async(function run$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return regeneratorRuntime.awrap(client.connect());

        case 3:
          bookCollection = client.db("BookCollection").collection("books");
          movieCollection = client.db("MovieCollection").collection("movie");
          animangaCollection = client.db("AnimangaCollection").collection("animanga"); //create

          app.postBook("/upload-book", function _callee(req, res) {
            var data, result;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    data = req.body;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(bookCollection.insertOne(data));

                  case 3:
                    result = _context.sent;
                    res.send(result);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }); //get-all

          app.getBook("/all-books", function _callee2(req, res) {
            var books, result;
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    books = bookCollection.find();
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(books.toArray());

                  case 3:
                    result = _context2.sent;
                    res.send(result);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }); //get by category

          /*app.getBookSpecific("/all-books", async(req,res) => {
              let query = {};
              if(req.query?.category){
                  query = {category: req.query.category};
              }
              const result = await bookCollection.find(query).toArray();
              res.send(result);
          })*/
          //update

          app.patchBook("/book/:id", function _callee3(req, res) {
            var id, updateBook, filter, options, updateDoc, result;
            return regeneratorRuntime.async(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    id = req.params.id;
                    updateBook = req.body;
                    filter = {
                      _id: new ObjectId(id)
                    };
                    options = {
                      upsert: true
                    };
                    updateDoc = {
                      $set: _objectSpread({}, updateBook)
                    };
                    _context3.next = 7;
                    return regeneratorRuntime.awrap(bookCollection.updateOne(filter, updateDoc, options));

                  case 7:
                    result = _context3.sent;
                    res.send(result);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }); //delete

          app.deleteBook("/book/:id", function _callee4(req, res) {
            var id, filter, result;
            return regeneratorRuntime.async(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    id = req.params.id;
                    filter = {
                      _id: new ObjectId(id)
                    };
                    _context4.next = 4;
                    return regeneratorRuntime.awrap(bookCollection.deleteOne(filter));

                  case 4:
                    result = _context4.sent;
                    res.send(result);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          });
          app.postMovie("/upload-movie", function _callee5(req, res) {
            var data, result;
            return regeneratorRuntime.async(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    data = req.body;
                    _context5.next = 3;
                    return regeneratorRuntime.awrap(movieCollection.insertOne(data));

                  case 3:
                    result = _context5.sent;
                    res.send(result);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          }); //get-all

          app.getMovie("/all-movies", function _callee6(req, res) {
            var movies, result;
            return regeneratorRuntime.async(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    movies = movieCollection.find();
                    _context6.next = 3;
                    return regeneratorRuntime.awrap(movies.toArray());

                  case 3:
                    result = _context6.sent;
                    res.send(result);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            });
          }); //get by category

          /*app.getMovieSpecific("/all-movies", async(req,res) => {
              let query = {};
              if(req.query?.category){
                  query = {category: req.query.category};
              }
              const result = await movieCollection.find(query).toArray();
              res.send(result);
          })*/
          //update

          app.patchMovie("/movie/:id", function _callee7(req, res) {
            var id, updateMovie, filter, options, updateDoc, result;
            return regeneratorRuntime.async(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    id = req.params.id;
                    updateMovie = req.body;
                    filter = {
                      _id: new ObjectId(id)
                    };
                    options = {
                      upsert: true
                    };
                    updateDoc = {
                      $set: _objectSpread({}, updateMovie)
                    };
                    _context7.next = 7;
                    return regeneratorRuntime.awrap(movieCollection.updateOne(filter, updateDoc, options));

                  case 7:
                    result = _context7.sent;
                    res.send(result);

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            });
          }); //delete

          app.deleteMovies("/movie/:id", function _callee8(req, res) {
            var id, filter, result;
            return regeneratorRuntime.async(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    id = req.params.id;
                    filter = {
                      _id: new ObjectId(id)
                    };
                    _context8.next = 4;
                    return regeneratorRuntime.awrap(movieCollection.deleteOne(filter));

                  case 4:
                    result = _context8.sent;
                    res.send(result);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            });
          });
          app.postAnimanga("/upload-animanga", function _callee9(req, res) {
            var data, result;
            return regeneratorRuntime.async(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    data = req.body;
                    _context9.next = 3;
                    return regeneratorRuntime.awrap(animangaCollection.insertOne(data));

                  case 3:
                    result = _context9.sent;
                    res.send(result);

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            });
          }); //get-all

          app.getAnimanga("/all-animanga", function _callee10(req, res) {
            var animangas, result;
            return regeneratorRuntime.async(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    animangas = animangaCollection.find();
                    _context10.next = 3;
                    return regeneratorRuntime.awrap(animangas.toArray());

                  case 3:
                    result = _context10.sent;
                    res.send(result);

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            });
          }); //get by category

          /*app.getAnimangaSpecific("/all-animanga", async(req,res) => {
              let query = {};
              if(req.query?.category){
                  query = {category: req.query.category};
              }
              const result = await animangaCollection.find(query).toArray();
              res.send(result);
          })*/
          //update

          app.patchAnimanga("/animanga/:id", function _callee11(req, res) {
            var id, updateAnimanga, filter, options, updateDoc, result;
            return regeneratorRuntime.async(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    id = req.params.id;
                    updateAnimanga = req.body;
                    filter = {
                      _id: new ObjectId(id)
                    };
                    options = {
                      upsert: true
                    };
                    updateDoc = {
                      $set: _objectSpread({}, updateAnimanga)
                    };
                    _context11.next = 7;
                    return regeneratorRuntime.awrap(animangaCollection.updateOne(filter, updateDoc, options));

                  case 7:
                    result = _context11.sent;
                    res.send(result);

                  case 9:
                  case "end":
                    return _context11.stop();
                }
              }
            });
          }); //delete

          app.deleteAnimanga("/animanga/:id", function _callee12(req, res) {
            var id, filter, result;
            return regeneratorRuntime.async(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    id = req.params.id;
                    filter = {
                      _id: new ObjectId(id)
                    };
                    _context12.next = 4;
                    return regeneratorRuntime.awrap(animangaCollection.deleteOne(filter));

                  case 4:
                    result = _context12.sent;
                    res.send(result);

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            });
          }); // Send a ping to confirm a successful connection

          _context13.next = 20;
          return regeneratorRuntime.awrap(client.db("admin").command({
            ping: 1
          }));

        case 20:
          console.log("Pinged your deployment. You successfully connected to MongoDB!");

        case 21:
          _context13.prev = 21;
          return _context13.finish(21);

        case 23:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0,, 21, 23]]);
}

run()["catch"](console.dir);
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});