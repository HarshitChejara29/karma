"use client";

import React from "react";
import Hero from "../components/pages/home/hero";
import Expectations from "../components/pages/home/expectations";
import Services from "../components/pages/home/services";
import Features from "../components/pages/home/features";
import Work from "../components/pages/home/work";

export default function App() {
    return(
        <React.Fragment>
            <Hero/>
            <Expectations/>
            <Services/>
            <Features/>
            <Work/>
        </React.Fragment>
    );
}