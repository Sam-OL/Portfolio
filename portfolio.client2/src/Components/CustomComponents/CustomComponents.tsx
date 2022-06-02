import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { IProject } from '../../Interfaces';
import './customComponents.css'

interface Props {
    item: IProject
}

function TimelineCardHeader({item }: Props) {
    const projectName = item.name;

    return (
        <div className="card-header__container"  >
            <Navbar.Brand className="navbar__brand-name" as={Link} to={`/Projects/${projectName}`}> {item.name}  - {item?.date.slice(0, 10)}</Navbar.Brand>
        </div>)
}

function Separator() {
    return (
        <div className="navbar--separator"/>
        )
}

export { TimelineCardHeader, Separator };