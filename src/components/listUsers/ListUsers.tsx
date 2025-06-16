import { Component } from "react";
import { connect } from "react-redux";
import { WithTranslation, withTranslation } from "react-i18next";

import './ListUsers.scss'

interface Client {
    name: string;
    review: string;
    date: string;
}

interface UsersByLang {
    en?: { [key: string]: Client };
    ru?: { [key: string]: Client };
}

interface UsersProps {
    users: UsersByLang;
    currentPage: number;
    pushUsersInStore: (users: UsersByLang) => void;
    setCurrentPage: (page: number) => void;
}

class ListUsers extends Component<UsersProps & WithTranslation> {
    async componentDidMount() {
        try {
            const request = await fetch("/data/data.json");
            const data = await request.json();
            this.props.pushUsersInStore(data);
        } catch (error) {
            console.log(error);
        }
    }

    buildHtmlUsers(userList: { [key: string]: Client }) {
        const { currentPage } = this.props;

        const values = Object.values(userList);
        const start = (currentPage - 1) * 10;
        const end = start + 10;
        const currentPageUsers = values.slice(start, end);

        return currentPageUsers.map((user, index) => (
            <div key={index} className="list-users__item">
                <h3>{user.name.split(" ")[0]} {user.name.split(" ")[1]?.[0]}.</h3>
                <p>{user.review}</p>
                <small>{user.date}</small>
            </div>
        ));
    }

    buildHtmlButtons(totalPages: number) {
        const { currentPage, setCurrentPage } = this.props;
        const buttons = [];

        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`btns__item ${i === currentPage ? 'active' : ""}`}>
                    {i}
                </button>
            );
        }

        return <div className="btns">{buttons}</div>;
    }

    render() {
        const { users, i18n } = this.props;
        const lang = i18n.language || "en";

        const userList = users[lang as keyof UsersByLang] || {};
        const totalPages = Math.ceil(Object.keys(userList).length / 10);

        return (

            <div className="list-users">
                <div className="list-users__items">
                    {this.buildHtmlUsers(userList)}
                </div>

                {this.buildHtmlButtons(totalPages)}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    users: state.users,
    currentPage: state.currentPage,
});

const mapDispatchProps = (dispatch: any) => ({
    pushUsersInStore: (users: UsersByLang) =>
        dispatch({ type: "UPDATE_USERS", payload: users }),
    setCurrentPage: (page: number) =>
        dispatch({ type: "SET_CURRENT_PAGE", payload: page }),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchProps)(ListUsers));