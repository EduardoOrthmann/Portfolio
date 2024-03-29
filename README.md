## Getting Started

First, run **npm install** in your bash to install all the dependencies.


Second, you want to create an account on GraphCMS and clone my project with all the schema ready to use, [![Clone project](https://graphcms.com/button)](https://app.graphcms.com/clone/88017ea0d0ac4d189ab6f091e6e379a8?name=Portfolio) did that just fill the schema with your information and follow the next steps.


Third, create a new file in the global directory called *.env.local*, you need to put 4 variables in this file so do as the example bellow:

NEXT_PUBLIC_API_URL= *Your graphCMS api url*<br>
NEXT_PUBLIC_API_ACCESS_TOKEN= *Your graphCMS api token*<br>
NEXT_PUBLIC_API_EMAIL= *The email you want to receive the contact messages*<br>
NEXT_PUBLIC_API_PASSWORD= *The password generated by your gmail*<br>


After that you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


If you want to update your schema and get the types with codegen, just create a new file in graphql/queries
like the other ones and do the query that you want to retrieve, done that you can just run:

```bash
npm run codegen
```

And your types will be ready to use.


When you are going to put your email on the .env constants, do not forget that you can't put the password of your email, 
you will  need to put the password generated by your google account. If you don't know how to get the password used from
nodemailer follow these steps:

- Open your gmail
- Click in manage your google account
- Search for app passwords
- In app passwords select *other* and give a name of your choice
- Click in generate and copy and paste the password in the *.env.local* constants


