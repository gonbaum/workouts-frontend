describe('Gymondo workout app', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
    })
  
    it('front page can be opened', function() {
      cy.contains('Workouts')
      cy.contains('Gymondo test case, developed by Gonzalo Garcia 2020')
    })
    
})