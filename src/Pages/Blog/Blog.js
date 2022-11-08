import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-3xl text-center mb-4'>This is <span className='text-blue-400'>Question</span> & <span className='text-green-600'>Answer</span> Part</h1>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    1. Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th  className='text-2xl'>SQL</th>
                                    <th className='text-2xl'>NoSQL</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td>Non-relational or distributed database system.</td>

                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>These databases have fixed or static or predefined schema</td>
                                    <td>They have dynamic schema</td>

                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>

                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>These databases are best suited for complex queries</td>
                                    <td>These databases are not so good for complex queries</td>

                                </tr>

                                <tr>
                                    <th>5</th>
                                    <td>Vertically Scalable</td>
                                    <td>Horizontally scalable</td>

                                </tr>

                                <tr>
                                    <th>6</th>
                                    <td>Follows ACID property</td>
                                    <td>Follows CAP(consistency, availability, partition tolerance)</td>

                                </tr>

                                <tr>
                                    <th>7</th>
                                    <td><span className='font-bold'>Examples:</span> MySQL, PostgreSQL, Oracle, MS-SQL Server etc	</td>
                                    <td><span className='font-bold'>Examples:</span> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p className='mb-4'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p className='mb-4'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    <p className='mb-4'>Once decoded, you will get two JSON strings:</p>
                    <ol className='mb-4'>
                        <li>1. The <span className='font-bold'>header</span> and the <span className='font-bold'>payload</span>.</li>
                        <li>2. The <span className='font-bold'>signature</span>.</li>
                    </ol>
                    <p className='mb-4'>The <span className='font-bold'>JOSE (JSON Object Signing and Encryption) header</span> contains the type of token — JWT in this case — and the signing algorithm.  </p>
                    <p className='mb-4'>The <span className='font-bold'>payload</span> contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
                    <p className='mb-4'>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. </p>
                    <p className='mb-4'>The <span className='font-bold'>signature</span> ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th  className='text-2xl'>Javascript</th>
                                    <th  className='text-2xl'>NodeJS</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                    <td>NodeJS is a Javascript runtime environment.</td>

                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Javascript can only be run in the browsers.</td>
                                    <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>
                                </tr>

                                <tr>
                                    <th>4</th>
                                    <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>
                                </tr>

                                <tr>
                                    <th>5</th>
                                    <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                                </tr>

                                <tr>
                                    <th>6</th>
                                    <td>Javascript is used in frontend development.</td>
                                    <td>Nodejs is used in server-side development.</td>
                                </tr>

                                <tr>
                                    <th>7</th>
                                    <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                    <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                                </tr>

                                <tr>
                                    <th>8</th>
                                    <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                                    <td>Nodejs is written in C, C++ and Javascript.</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;