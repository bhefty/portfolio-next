import React, { Component } from 'react';
import Layout from '../components/layout'
import Splash from '../components/splash'
import ProjectPageList from '../components/projectPageList'

export default() => (
    <Layout
        title='Bill Hefty | Projects' 
        splashHeader={(<Splash
            page='projects'
            header='projects'
            subHeader='Checkout some of my recent projects.'
        />)}
    >
        <ProjectPageList />
    </Layout>
)