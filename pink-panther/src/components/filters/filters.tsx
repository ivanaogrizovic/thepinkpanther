import React from 'react';
import './filters.css';
import { filters } from '../../interfaces/filters.interface';

function Filters(props: any) {

    const preselectedFilter = props.filter;

    const filterList: filters[] = [
        {
            name: "oval",
            isChecked: false
        },
        {
            name: "princess",
            isChecked: false
        },
        {
            name: "emerald",
            isChecked: false
        },
        {
            name: "pear",
            isChecked: false
        },
        {
            name: "cushion",
            isChecked: false
        },
        {
            name: "round",
            isChecked: false
        },
        {
            name: "marquise",
            isChecked: false
        }, {
            name: "halo",
            isChecked: false
        },
        {
            name: "solitaire",
            isChecked: false
        },
        {
            name: "three stone",
            isChecked: false
        },
        {
            name: "double halo",
            isChecked: false
        },
        {
            name: "straight",
            isChecked: false
        },
        {
            name: "white gold",
            isChecked: false
        },
        {
            name: "yellow gold",
            isChecked: false
        },
        {
            name: "platinum",
            isChecked: false
        },
        {
            name: "less than 600",
            isChecked: false
        },
        {
            name: "600-1000",
            isChecked: false
        },
        {
            name: "1000-2500",
            isChecked: false
        },
        {
            name: "2500",
            isChecked: false
        }
    ];

    const checkSelected = () => {
        filterList.forEach((filter: filters) => {
            if (filter.name === preselectedFilter) {
                filter.isChecked = true;
            }
        })
    }
    checkSelected();

    const handleChange = () => {

        console.log('The checkbox was toggled');

    };

    return (
        <div className='filters'>
            {/* <div>  <input type="checkbox" onChange={handleChange} /> </div> */}
            <h3 className='filter-title'>Filter by</h3>
            <h3 className='filter'>Shape</h3>
            <ul className='filter-list'>
                <li><input type="checkbox" id="oval" name="oval" value="oval" />
                    <label>oval</label></li>
                <li>
                    <input type="checkbox" id="princess" name="princess" value="princess" />
                    <label>princess</label>
                </li>
                <li>
                    <input type="checkbox" id="emerald" name="emerald" value="emerald" />
                    <label>emerald</label>
                </li>
                <li>
                    <input type="checkbox" id="pear" name="pear" value="pear" />
                    <label>pear</label>
                </li>
                <li>
                    <input type="checkbox" id="cushion" name="cushion" value="cushion" />
                    <label>cushion</label>
                </li>
                <li>
                    <input type="checkbox" id="round" name="round" value="round" />
                    <label>round</label>
                </li>
                <li>
                    <input type="checkbox" id="marquise" name="marquise" value="marquise" />
                    <label>marquise</label>
                </li>
            </ul>
            <h3 className='filter'>Style</h3>
            <ul className='filter-list'>
                <li><input type="checkbox" id="halo" name="halo" value="halo" />
                    <label>halo</label></li>
                <li>
                    <input type="checkbox" id="solitaire" name="solitaire" value="solitaire" />
                    <label>solitaire</label>
                </li>
                <li>
                    <input type="checkbox" id="three stone" name="three stone" value="three stone" />
                    <label>three stone</label>
                </li>
                <li>
                    <input type="checkbox" id="double halo" name="double halo" value="double halo" />
                    <label>double halo</label>
                </li>
                <li>
                    <input type="checkbox" id="straight" name="straight" value="straight" />
                    <label>straight</label>
                </li>
            </ul>
            <h3 className='filter'>Metal</h3>
            <ul className='filter-list'>
                <li><input type="checkbox" id="white gold" name="white gold" value="white gold" />
                    <label>white gold</label></li>
                <li>
                    <input type="checkbox" id="yellow gold" name="yellow gold" value="yellow gold" />
                    <label>yellow gold</label>
                </li>
                <li>
                    <input type="checkbox" id="platinum" name="platinum" value="platinum" />
                    <label>platinum</label>
                </li>
            </ul>
            <h3 className='filter'>Price</h3>
            <ul className='filter-list'>
                <li><input type="checkbox" id="white gold" name="white gold" value="white gold" />
                    <label>less than 600€</label></li>
                <li>
                    <input type="checkbox" id="yellow gold" name="yellow gold" value="yellow gold" />
                    <label>600€ - 1000€</label>
                </li>
                <li>
                    <input type="checkbox" id="platinum" name="platinum" value="platinum" />
                    <label>1000€ - 2500€</label>
                </li>
                <li>
                    <input type="checkbox" id="platinum" name="platinum" value="platinum" />
                    <label>2500€ - more</label>
                </li>
            </ul>
        </div>
    );
}

export default Filters;