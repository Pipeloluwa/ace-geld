"use client";
import { useEffect } from 'react';
import { CardBackgroundComponent } from '../components/shared-components/CardBackgroundComponent'
import { useDispatch } from 'react-redux'
import { setNavValue } from '../state_management/reducers/client-reducers/navValue'
import { ProjectsBaseComponent } from '../components/projects-components/ProjectsBaseComponent';
import { CoreTeamComponent } from '../components/about-components/CoreTeamComponent';
import { InfoComponent } from '../components/about-components/InfoComponent';
import { projectsData } from '../variables/projectsVariables';

export default function Explore() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavValue({ action: "Explore" }));
    }, []);



    return (
        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">
            <CardBackgroundComponent imagePath='/images/pictures/projects/a9.webp' title='Explore' />
            <InfoComponent />

            <CoreTeamComponent />

            <ProjectsBaseComponent title={"Renovations"} projectData={projectsData["renovation"]} />

        </div>
    )
}
