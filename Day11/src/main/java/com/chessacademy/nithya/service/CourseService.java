package com.chessacademy.nithya.service;

import com.chessacademy.nithya.model.Courses;

public interface CourseService {
    Courses addCourse(Courses course, String institutionId);
}
