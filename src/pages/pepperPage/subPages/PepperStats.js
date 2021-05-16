import React, { Component } from 'react';
import GenericTable from '../../../components/tables';

export default class PepperStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pepperFoodTableHeader: [
        {
          id: 'Entry ID'
        },
        {
          brandName: 'Brand Name'
        },
        {
          flavor: 'Flavor'
        },
        {
          comments: 'Comments'
        },
        {
          stars: 'Pepper\'s Ratings'
        },
        {
          foodType: 'Type of Food'
        }
      ],
      pepperFoodTable: [
        {
          id: 1, brandName: 'Purina', flavor: 'eggs', comments: 'Pepper really liked this', stars: 3.5, foodType: 'kibble'
        },
        {
          id: 2, brandName: 'Purina', flavor: 'liver', comments: 'This causes diarrhea', stars: 0, foodType: 'kibble'
        }
      ],
      // eslint-disable-next-line react/no-unused-state
      foodTypes: [
        {
          kibble: 'Kibble'
        },
        {
          wetFood: 'Wet Food'
        },
        {
          treats: 'Treats'
        }
      ]
    };
  }

  pepperAge = () => {
    const MILLISECONDSINAYEAR = 31536000000;
    const MILLISECONDSINADAY = 86400000;
    const dateDiffMills = Date.now() - Date.parse('5/9/2018');
    const daysOld = (dateDiffMills / MILLISECONDSINADAY) % 365;
    return `Pepper is ${Math.trunc(dateDiffMills / MILLISECONDSINAYEAR)} years and ${daysOld} days old.\n
    There are ${Math.trunc(365 - daysOld)} days until her next birthday`;
  };

  // days 86400000
  // years 31536000000

  onEntryClick = () => null;

  onDeleteButtonClick = () => null;

  onSortClickHandler = () => null;

  render() {
    const { pepperFoodTableHeader, pepperFoodTable } = this.state;
    return (
      <div>
        {this.pepperAge()}
        <div>
          <GenericTable
            onDeleteButtonClick={this.onDeleteButtonClick}
            tableEntries={pepperFoodTable}
            onEntryClick={this.onEntryClick}
            tableHeadersMap={pepperFoodTableHeader}
            sortClickHandler={this.onSortClickHandler}
          />
        </div>
      </div>
    );
  }
}
