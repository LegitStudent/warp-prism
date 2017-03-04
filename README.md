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
```  
warpin index api --object
warpin user api/user --class --chai
warpin post api/post --class
warpin localAuth api/user/auth --function --chai
warpin googleAuth api/user/auth --f --chai
```
Generates this structure
[server]  
--[api]  
----[post]  
------post.js  
------post.spec.js  
----[user]  
------[auth]  
--------googleAuth.js  
--------googleAuth.spec.js  
--------localAuth.js  
--------localAuth.spec.js  
------user.js  
------user.spec.js  
--index.js  
--index.spec.js  


See images http://imgur.com/a/k6RX9
