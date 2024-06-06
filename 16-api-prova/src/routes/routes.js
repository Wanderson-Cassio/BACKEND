const express = require('express')
const router = express.Router()

// controllers
const AlunoController = require('../controllers/AlunoController')
const CursoController = require('../controllers/CursoController')
const DisciplinaController = require('../controllers/DisciplinaController')
const ProfessorController = require('../controllers/ProfessorController')
const TurmaController = require('../controllers/TurmaController')

// validators
const { validarId } = require('../validators/IdValidator')
const { alunoValidador } = require('../validators/AlunoValidador')
const { cursoValidador } = require('../validators/CursoValidador')
const { disciplinaValidador } = require('../validators/DisciplinaValidador')
const { professorValidador } = require('../validators/ProfessorValidador')
const { turmaValidador } = require('../validators/TurmaValidador')

// Alunos
router.post('/alunos', alunoValidador, AlunoController.create)
router.get('/alunos', AlunoController.getAll)
router.get('/alunos/:id', validarId, AlunoController.getById)
router.put('/alunos/:id', validarId, alunoValidador, AlunoController.update)
router.delete('/alunos/:id', validarId, AlunoController.remove)

// Cursos
router.post('/cursos', cursoValidador, CursoController.create)
router.get('/cursos', CargoController.getAll)
router.get('/cursos/:id', validarId, CursoController.getById)
router.put('/cursos/:id', validarId, cursoValidador, CursoController.update)
router.delete('/cursos/:id', validarId, CursoController.remove)

// Disciplinas
router.post('/disciplinas', disciplinaValidador, DisciplinaController.create)
router.get('/disciplinas', DisciplinaController.getAll)
router.get('/disciplinas/:id', validarId, DisciplinaController.getById)
router.put('/disciplinas/:id', validarId, disciplinaValidador, DisciplinaController.update)
router.delete('/disciplinas/:id', validarId, DisciplinaController.remove)

// Professores
router.post('/professores', professorValidador, ProfessorController.create)
router.get('/professores', ProfessorController.getAll)
router.get('/professores/:id', validarId, ProfessorController.getById)
router.put('/professores/:id', validarId, professorValidador, ProfessorController.update)
router.delete('/professores/:id', validarId, ProfessorController.remove)

// Turmas
router.post('/turmas', turmaValidador, TurmaController.create)
router.get('/turmas', TurmaController.getAll)
router.get('/turmas/:id', validarId, TurmaController.getById)
router.put('/turmas/:id', validarId, turmaValidador, TurmaController.update)
router.delete('/turmas/:id', validarId, TurmaController.remove)


module.exports = router