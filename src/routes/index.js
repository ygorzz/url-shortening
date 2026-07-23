import express from "express";
import urlRoutes from "./urlRoutes.js"

export default function routes (app) {
    app.use(urlRoutes);
}