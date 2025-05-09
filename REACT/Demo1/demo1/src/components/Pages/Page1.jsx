import React from "react";
import Card from "../card";
import Button from "../Button";


export default function Page1() {
    return(
        <div className="w-screen">
            <div className="grid grid-cols-3 w-screen gap-2">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
            <Button></Button>
            </div>
    );
}