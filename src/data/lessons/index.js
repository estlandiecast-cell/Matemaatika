import { lessons1 } from './lesson1.js';
import { lessons2 } from './lesson2.js';
import { lessons3 } from './lesson3.js';
import { lessons4 } from './lesson4.js';
import { lessons5 } from './lesson5.js';
import { lessons6 } from './lesson6.js';
import { lessons7 } from './lesson7.js';
import { lessons8 } from './lesson8.js';
import { lessons9 } from './lesson9.js';
import { lessons10 } from './lesson10.js';
import { lessons11 } from './lesson11.js';

export const allLessons = [
  ...lessons1,
  ...lessons2,
  ...lessons3,
  ...lessons4,
  ...lessons5,
  ...lessons6,
  ...lessons7,
  ...lessons8,
  ...lessons9,
  ...lessons10,
  ...lessons11,
];

export const getLessonById = (id) => allLessons.find(l => l.id === id);
