import React, { Component } from 'react';
import { func } from 'prop-types';
import pepperGallery from '../../resources/pepperCardImage.png';
import pepperMedical from '../../resources/medicalPepper.png';
import pepperAwards from '../../resources/awardsPepper.png';
import pepperStats from '../../resources/busyPepper.png';
import { ImageCardButton } from '../../components/buttons';
import PepperGallery from './subPages/PepperGallery';
import PepperMedical from './subPages/PepperMedical';
import './subPages/subPages.css';
import PepperStats from './subPages/PepperStats';
import PepperShows from './subPages/PepperShows';

export default class Pepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldButtonsBeLarge: true,
      shouldPepperGalleryShow: false,
      shouldPepperMedicalShow: false,
      shouldPepperStatsShow: false,
      shouldPepperShowsShow: false
    };
  }

  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Pepper\'s Corner');
  }

  componentWillUnmount() {
    this.setState({ shouldButtonsBeLarge: true });
  }

  alternateButtonSize = () => {
    this.setState({ shouldButtonsBeLarge: false });
  }

  hideAllComponents = () => {
    this.setState({ shouldPepperGalleryShow: false, shouldPepperMedicalShow: false });
  }

  onGalleryClick = () => {
    this.hideAllComponents();
    this.setState({ shouldPepperGalleryShow: true });
    this.alternateButtonSize();
    console.log('Gallery Click');
  }

  onMedicalClick = () => {
    this.hideAllComponents();
    this.setState({ shouldPepperMedicalShow: true });
    this.alternateButtonSize();
    console.log('Medical Click');
  };

  onShowsClick = () => {
    this.hideAllComponents();
    this.setState({ shouldPepperShowsShow: true });
    this.alternateButtonSize();
    console.log('Awards Click');
  }

  onStatsClick = () => {
    this.hideAllComponents();
    this.setState({ shouldPepperStatsShow: true });
    this.alternateButtonSize();
    console.log('Stats Click');
  }

  render() {
    const {
      shouldButtonsBeLarge,
      shouldPepperGalleryShow,
      shouldPepperMedicalShow,
      shouldPepperShowsShow,
      shouldPepperStatsShow
    } = this.state;
    return (
      <div>
        <h1 className="pepperH1">
          {('Welcome to a Page Dedicated to All Things Pepper').toUpperCase()}
        </h1>
        <div className="flex-container">
          <div className="flex-row d-flex justify-content-center">
            <ImageCardButton buttonClickHandler={this.onGalleryClick} size={shouldButtonsBeLarge} buttonText="Gallery" cardImage={pepperGallery} />
            <ImageCardButton buttonClickHandler={this.onMedicalClick} size={shouldButtonsBeLarge} buttonText="Medical" cardImage={pepperMedical} />
            {/* </div> */}
            {/* <div className="flex-row d-flex justify-content-center"> */}
            <ImageCardButton buttonClickHandler={this.onShowsClick} size={shouldButtonsBeLarge} buttonText="Shows" cardImage={pepperAwards} />
            <ImageCardButton buttonClickHandler={this.onStatsClick} size={shouldButtonsBeLarge} cardImage={pepperStats} buttonText="Stats" />
          </div>
          {shouldPepperGalleryShow ? <PepperGallery /> : null}
          {shouldPepperMedicalShow ? <PepperMedical /> : null}
          {shouldPepperShowsShow ? <PepperShows /> : null}
          {shouldPepperStatsShow ? <PepperStats /> : null}
        </div>
      </div>
    );
  }
}

Pepper.propTypes = {
  updatePageTitle: func.isRequired
};
