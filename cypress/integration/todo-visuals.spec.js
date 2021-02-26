/// <reference types="cypress" />

describe('todo actions', () => {
  before(() =>
    cy.eyesOpen({
      testName: 'todo-actions-visual'
    }),
  )

  after(() => cy.eyesClose())

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    // cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color')

    cy.get('.new-todo').type('Clean room{enter}')
  })

  it('should add a new todo to the list', () => {
    // cy.get('label').should('have.text', 'Clean room')
    // cy.get('.toggle').should('not.be.checked')
    cy.eyesCheckWindow('new todo')
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      cy.get('.toggle').click()
      // cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
      cy.eyesCheckWindow('toggle todo')
    })

    it('should clear completed', () => {
      cy.get('.toggle').click()
      cy.contains('Clear completed').click()

      // cy.get('.todo-list').should('not.have.descendants', 'li')
      cy.eyesCheckWindow('clear completed')
    })
  })
})
