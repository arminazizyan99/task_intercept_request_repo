describe("Request/Intercept",()=>{
  //context('iphone-5 resolution', () => {
  //beforeEach(()=>{

    //cy.viewport(768, 1024)
  
 //})

  it("should contain title text using request", ()=>{

     cy.request("/").its("body").should('include', "<h1>Lorem Ipsum</h1>")
        
     })


it("should modify response using intercept",()=>{

    cy.intercept({
      url: 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',  
     },(req) => {

        req.reply((res) =>
        {
          res.send({ fixture: 'data.json' });
        })

      }).as("data")
  
  cy.visit("https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html")

  cy.wait("@data").its('response')
  .should(response => expect(response.statusCode).to.eq(200))   
  .should(response => expect(response.body.members.length).to.eq(1))
  .should(response => expect(response.body.members[0].name).to.contain("Sherlock Holmes"))
  
})
})
//})