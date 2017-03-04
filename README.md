# Warp Prism


## How to use
`npm install -g warp-prism`  

### Generate Common Data Structures & Unit Test File    
`warpin doublyLinkedList data-structures`  

`cd data-structures`  

`warpin trie .`  


### Generate Custom Objects, specify directory later
`warpin zealot`  

`warpin adept`

`cd psionic-matrix`  

`ls -l`  

### Provides flexibility for opinionated devs 
**Lets say you start with some boiler plate code at dir /Server/**
```  
warpin index api --object
warpin user api/user --class --chai
warpin post api/post --class
warpin localAuth api/user/auth --function --chai
warpin googleAuth api/user/auth --f --chai
```
**Generates this structure**  
/Server/    
--/api/   
----/post/  
------post.js  
------post.spec.js  
----/user/  
------/auth/  
--------googleAuth.js  
--------googleAuth.spec.js  
--------localAuth.js  
--------localAuth.spec.js  
------user.js  
------user.spec.js  
--index.js  
--index.spec.js  

**Example file: post.js**
```
module.exports = (function (){
  function Post(){
  }
  
  Post.prototype.sayHello = function (){
    return 'My Life for Auir!'
  }
  return Post
})()
```

**Example file: googleAuth.js**
```
module.exports = (function (){
  function googleAuth(){
    return 'My Life for Auir!'
  }
  
  return googleAuth
})()
```


**Example file: googleAuth.spec.js**
```
'use strict'
var expect = require('chai').expect;
var googleAuth = require('./googleAuth')
describe('googleAuth function',function (){
  describe('General case',function (){
    it('should say hello',function (){
      expect(googleAuth()).to.equal('My Life for Auir!')
    })
  })
})

```


See images http://imgur.com/a/k6RX9
