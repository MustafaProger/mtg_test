import { Component } from "react";

import { connect } from "react-redux";
import { WithTranslation, withTranslation } from "react-i18next";

interface Client {
    name: string;
    review: string;
    date: string;
}

interface UsersProps {
    users: { [key: string]: Client };
    pushUsersInStore: (users: { [key: string]: Client }) => void;
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

    buildHtml(users: Client) {

        if (!users) return 'Loading...'

        return Object.values(users).map((user) => (
            <div key={user.name}>
                <h4>{user.name}</h4>
                <p>{user.review}</p>
                <small>{user.date}</small>
                <hr />
            </div>
        ));
    }

    render() {

        const { users, i18n } = this.props

        return (
            <div className="list-users">{i18n.language === 'en' ? this.buildHtml(users.en) : this.buildHtml(users.ru)}</div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    users: state.users,
});

const mapDispatchProps = (dispatch: any) => ({
    pushUsersInStore: (users: { [key: string]: Client }) =>
        dispatch({ type: "UPDATE_USERS", payload: users }),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchProps)(ListUsers));