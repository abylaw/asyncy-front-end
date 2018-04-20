---
path: "/faq"
title: "Frequently Asked Questions"
---
### What are microservices?

Microservices Wikipedia page is a great place to start.

### Who maintains the microservices?

The project contributors maintain the service. This may be open-source projects, vendor built projects, or private projects. To have a service compatible with Asyncy there is very litle configuration required, learn more here.

### Why use a domain-specific language?

We believe a syntax-light language that is highly readable is important. Asyncy aims to reduce complexity, so our language should represent this. After exploring other languages such as Node, Python, and Java we found a number of issues that required us to "think differently".

### How difficult is it to build my own services?

Use any programming language necessary to build your service just like you would a library, package, or application. To have a service compatible with Asyncy there is very litle configuration required, learn more here.

### Can I bring my own database?
Yes, this is actually the only way. Asyncy is a platform for execution and we do not provide the underlining services. But we make it really easy to create them, however, you have to manage your own database. 

We recommend using Heroku Postgres, Amazon RDS, RedisLabs or CloudAMQP just to name a few.

### How much Kubernetes or devops experience is required?

Little to none. Asyncy interacts with Kubernetes so you don't need to. It manages scaling, security, routing, networks and much more.

### Can my Storyscripts and custom services be private code?

Microservices are slower than single-threaded applications. But with proper design this difference in speed is not noticable. Asyncy adds very little overhead with Storyscript execution and uses the best practices to have container execute as quickly as possible.

### What are some current limitations to Asyncy?

Time-sensitive HTTP traffic should not be synchronously bound to a Storyscript execution. This was a known limitation from the start, but comes at no surprise. Building UI pages needs to be handled by a threaded server. However, Asyncy des provides a "serverless" environment simular to AWS Lambda.

### Where are Storyscript's and other code stored?

Asyncy relies on GitHub for many things including storing source code. This has significant benifits with portability, version controlling and security.

### How are user permissions handled?

Asyncy relies on GitHub as user authentication and permission. This has significant benifits to the platform and a powerful level of security and team transparency. We use GitHub Teams as a granular permission scope.