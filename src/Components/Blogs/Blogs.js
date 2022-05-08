import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import "./Blogs.css"
const Blogs = () => {
    return (
        
        <div className='question m-3 p-4'>
          <PageTitle title="Blogs"></PageTitle>

         <h4> Q1:Difference between javascript and nodejs?</h4>
           <p> JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine. </p> <br/>
          <h4>Q2: When should you use nodejs and when should you use mongodb?</h4>
          <p>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. On Contrary, Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests.</p><br/>
            
         <h4>Q3: Differences between sql and nosql databases.?</h4>
         <p> In NOSQL, Individual records are stored as documents.Documents belonging to a particular class or group as a collection.It means pre-defined structered for incoming data can be defined.
         whereas, in SQL, each individual records are stored as rows in a table.A table is used to store rows of similar type.MYSQL uses structered query Language(SQL) for database access.This schema cannot be changed.  
        </p><br/>
        <h4>Q2: What is the purpose of jwt and how does it work?</h4>
        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
        <br/>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.The header contains the type of token — JWT in this case — and the signing algorithm.The payload contains the claims. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
        </p>
        </div>
       
    );
};

export default Blogs;