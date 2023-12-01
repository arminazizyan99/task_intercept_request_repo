describe("Login",()=>{
  //beforeEach(()=>{

  //   cy.visit("/");
  
 // })


  it("should contain title text", ()=>{

     cy.request("/").its("body").should('include', "<h1>Lorem Ipsum</h1>")
        
     })


it("should modify response",()=>{

    cy.intercept({
      url: 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',  
     },(req) => {

        req.reply((res) =>
        {
          res.send({ fixture: 'data.json' });
        })

      }).as("data")
  

  cy.visit("https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html")


  cy.wait("@data")


  
})
})