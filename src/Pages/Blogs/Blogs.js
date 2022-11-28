import React from 'react';

const Blogs = () => {
    return (
        <div className="card w-full bg-base-200 text-black-content grid gy-6 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <div className="card-body">
          <h2 className="card-title text-2xl">1. What are the different ways to manage a state in a React application?</h2>
          <p className='text-xl'> There are four main types of state you need to properly manage in your React apps:

                                1. Local state
                                2. Global state
                                3. Server state
                                4. URL state <br /> <br />

                                * Local (UI) state – Local state is data we manage in one or another component.   <br />
                                * Global (UI) state – Global state is data we manage across multiple components. <br />
                                * Server state – Data that comes from an external server that must be integrated with   our UI state.  <br />
                                * URL state – Data that exists on our URLs, including the pathname and query        parameters.               

                                </p>
        </div>

        <div className="card-body">
          <h2 className="card-title text-2xl">2. How does prototypical inheritance work?</h2>
          <p className='text-xl'>

          The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. <br /> <br /> Traditionally, in order to get and set the [Prototype] of an object, we use Object. getPrototypeOf and Object.
          </p>
        </div>

        <div className="card-body">
          <h2 className="card-title text-2xl">3. What is a unit test? Why should we write unit tests?</h2>
          <p className='text-xl'>  
          A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.  <br /> <br />

          For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written. <br /> <br />

          They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.

            </p>
        </div>

        <div className="card-body">
          <h2 className="card-title text-2xl">4 React vs. Angular vs. Vue?
            </h2>
          <p className='text-xl'>

                1. React: The library is only concerned with UI components. MVC design requires Flux to implement, but it provides you more flexibility in how you wish to organise your code. One-way data binding means that a UI element can't affect a component's state.

            <br /> <br />

                2. Angular: Full-featured Framework – provides a strong opinion on how your application should be designed, as well as a number of tiny libraries that aid in the development of complex applications.
                Supports both one way and two way  data binding ,two-way data binding.

             

        <br /> <br />

                3. Vue:  Vue makes use of a virtual DOM. The virtual DOM component is basically a replica of the main DOM element available in the form of Js data structures and absorbs all DOM changes. Then the initial data structure is compared with the modifications introduced to the Js data structures.  This functionality uses a binding directive in Vue called v-bind. It allows users to edit or assign values to HTML properties, modify the format, and assign classes.

             </p>
        </div>




      </div>
    );
};

export default Blogs;