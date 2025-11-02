"use client"
import React, { useEffect } from 'react'
import { CardBackgroundComponent } from '../shared-components/CardBackgroundComponent'
import { useDispatch } from 'react-redux'
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue'
import { IProjectInfo } from '@/app/interfaces/ITypeData'
import { MoreProjects } from './MoreProjects'
import { ProjectsUpCloseComponent } from './ProjectsUpCloseComponent'
import { ProjectsInfoComponent } from './ProjectsInfoComponent'
import { ProjectEstateFeatureComponent } from './ProjectEstateFeatureComponent'
import { ThreeDComponent } from '../house-type-components/ThreeDComponent'




export const ProjectsBaseComponent:React.FC<IProjectInfo> = (projectDataResponse) => {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavValue({ action: "Projects" }));
    }, []);

    
    return (
        <>

            <ProjectsInfoComponent title={projectDataResponse.title} projectData={projectDataResponse.projectData} />

            <ProjectEstateFeatureComponent estate_features={projectDataResponse.projectData.estate_features}/>

            <ProjectsUpCloseComponent picture={projectDataResponse.projectData.project_up_close}/>
            
            <MoreProjects title={projectDataResponse.title}/>


        </>
    )
}
