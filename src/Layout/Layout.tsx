import React, { Component } from 'react';
import Header from 'components/Header/Header';

export default function Layout(props: any){
    return(
        <div>   
            <Header />
            {props.children}
        </div>
    )
}