import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import i18n from '../../i18n';

import './Header.scss'
import Watch from "../watch/Watch";

import englishIcon from '../../assets/icons/english.svg'
import russianIcon from '../../assets/icons/russian.svg'

interface HeaderState {
	menuActive: boolean;
}

interface HeaderDispatch {
	toggleMenu: () => void
}

class Header extends Component<HeaderState & HeaderDispatch> {
	render() {

		const { menuActive, toggleMenu } = this.props

		return (
			<header className={`header ${menuActive ? "active" : ""}`}>
				<div className='container'>
					<div className='header__content'>
						<div className='logo'>
							<img
								src='https://cdn2.hubspot.net/hubfs/53/image8-2.jpg'
								alt='logo-google'
								className='logo__img'
							/>
						</div>
						<nav className={`navbar ${menuActive ? "active" : ""}`}>
							<ul className='list__items'>
								<li className='list__item'>
									<Link
										to=''
										className='list__hyperlink'>
										Home
									</Link>
								</li>
								<li className='list__item'>
									<Link
										to='about'
										className='list__hyperlink'>
										About
									</Link>
								</li>
								<li className='list__item'>
									<Link
										to='services'
										className='list__hyperlink'>
										Services
									</Link>
								</li>
								<li className='list__item'>
									<Watch />
								</li>
								<div className="language-switcher">
									<span onClick={() => i18n.changeLanguage('en')}><img src={englishIcon} alt="englishIcon" width={25} height={25} /></span>
									<span onClick={() => i18n.changeLanguage('ru')}><img src={russianIcon} alt="englishIcon" width={25} height={25} /></span>
								</div>
							</ul>
						</nav>
						<div className={`header__burger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state: any): HeaderState => ({
	menuActive: state.menuActive
})

const mapDispatchProps = (dispatch: any): HeaderDispatch => ({
	toggleMenu: () => dispatch({ type: "MENU_ACTIVE" })
})

export default connect(mapStateToProps, mapDispatchProps,)(Header);
