var searchIndex = {};
searchIndex["compression"] = {"doc":"rust-compression","items":[[0,"prelude","compression","",null,null],[3,"BZip2Decoder","compression::prelude","",null,null],[3,"BZip2Encoder","","",null,null],[3,"Deflater","","",null,null],[3,"Inflater","","",null,null],[3,"GZipDecoder","","",null,null],[3,"GZipEncoder","","",null,null],[3,"LzhufDecoder","","",null,null],[3,"LzhufEncoder","","",null,null],[3,"ZlibDecoder","","",null,null],[3,"ZlibEncoder","","",null,null],[3,"DecodeIterator","","",null,null],[3,"EncodeIterator","","",null,null],[4,"Action","","",null,null],[13,"Run","","",0,null],[13,"Flush","","",0,null],[13,"Finish","","",0,null],[4,"BZip2Error","","",null,null],[13,"DataError","","",1,null],[13,"DataErrorMagicFirst","","",1,null],[13,"DataErrorMagic","","",1,null],[13,"UnexpectedEof","","",1,null],[13,"Unexpected","","",1,null],[4,"LzhufMethod","","",null,null],[13,"Lh4","","",2,null],[13,"Lh5","","",2,null],[13,"Lh6","","",2,null],[13,"Lh7","","",2,null],[4,"CompressionError","","",null,null],[13,"DataError","","",3,null],[13,"UnexpectedEof","","",3,null],[13,"Unexpected","","",3,null],[8,"DecodeExt","","",null,null],[10,"decode","","",4,{"inputs":[{"name":"self"},{"name":"e"}],"output":{"name":"decodeiterator"}}],[8,"Decoder","","",null,null],[16,"Error","","",5,null],[16,"Direction","","",5,null],[16,"Item","","",5,null],[10,"next","","",5,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"generics":["option"],"name":"result"}}],[11,"iter","","",5,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"decoderchainiterator"}}],[8,"EncodeExt","","",null,null],[10,"encode","","",6,{"inputs":[{"name":"self"},{"name":"e"},{"name":"action"}],"output":{"name":"encodeiterator"}}],[8,"Encoder","","",null,null],[16,"Error","","",7,null],[10,"next","","",7,{"inputs":[{"name":"self"},{"name":"i"},{"name":"action"}],"output":{"generics":["result"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"action"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"action"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"compressionerror"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"compressionerror"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",3,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"next","","",8,{"inputs":[{"name":"self"}],"output":{"generics":["result"],"name":"option"}}],[11,"iter","","",5,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"decoderchainiterator"}}],[11,"next","","",9,{"inputs":[{"name":"self"}],"output":{"generics":["result"],"name":"option"}}],[11,"default","","",10,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",10,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",10,{"inputs":[{"name":"self"},{"name":"i"},{"name":"action"}],"output":{"generics":["result"],"name":"option"}}],[11,"default","","",11,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",11,{"inputs":[],"output":{"name":"self"}}],[11,"next","","",11,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"generics":["option"],"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"bzip2error"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"bzip2error"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"from","","",3,{"inputs":[{"name":"bzip2error"}],"output":{"name":"self"}}],[11,"default","","",12,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",12,{"inputs":[],"output":{"name":"self"}}],[11,"with_dict","","",12,null],[11,"next","","",12,{"inputs":[{"name":"self"},{"name":"i"},{"name":"action"}],"output":{"generics":["result"],"name":"option"}}],[11,"default","","",13,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",13,{"inputs":[],"output":{"name":"self"}}],[11,"with_dict","","",13,null],[11,"next","","",13,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"generics":["option"],"name":"result"}}],[11,"new","","",14,{"inputs":[{"name":"lzhufmethod"}],"output":{"name":"self"}}],[11,"next","","",14,{"inputs":[{"name":"self"},{"name":"i"},{"name":"action"}],"output":{"generics":["result"],"name":"option"}}],[11,"new","","",15,{"inputs":[{"name":"lzhufmethod"}],"output":{"name":"self"}}],[11,"next","","",15,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"generics":["option"],"name":"result"}}],[11,"default","","",16,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",16,{"inputs":[],"output":{"name":"self"}}],[11,"with_dict","","",16,null],[11,"next","","",16,{"inputs":[{"name":"self"},{"name":"i"},{"name":"action"}],"output":{"generics":["result"],"name":"option"}}],[11,"default","","",17,{"inputs":[],"output":{"name":"zlibdecoder"}}],[11,"new","","",17,{"inputs":[],"output":{"name":"self"}}],[11,"with_dict","","",17,null],[11,"next","","",17,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"generics":["option"],"name":"result"}}],[11,"default","","",18,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",18,{"inputs":[],"output":{"name":"self"}}],[11,"next","","",18,{"inputs":[{"name":"self"},{"name":"i"},{"name":"action"}],"output":{"generics":["result"],"name":"option"}}],[11,"default","","",19,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",19,{"inputs":[],"output":{"name":"self"}}],[11,"next","","",19,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"generics":["option"],"name":"result"}}]],"paths":[[4,"Action"],[4,"BZip2Error"],[4,"LzhufMethod"],[4,"CompressionError"],[8,"DecodeExt"],[8,"Decoder"],[8,"EncodeExt"],[8,"Encoder"],[3,"EncodeIterator"],[3,"DecodeIterator"],[3,"BZip2Encoder"],[3,"BZip2Decoder"],[3,"Inflater"],[3,"Deflater"],[3,"LzhufEncoder"],[3,"LzhufDecoder"],[3,"ZlibEncoder"],[3,"ZlibDecoder"],[3,"GZipEncoder"],[3,"GZipDecoder"]]};
initSearch(searchIndex);
