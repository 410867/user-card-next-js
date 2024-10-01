import * as React from 'react';
import {Button, Card, CardContent, CardMedia, Grid2, Typography} from "@mui/material";

const styles = {
    card_user: {
        display: 'flex',
        flexDirection: 'row',
        width: '730px',
    },
    card_user_image: {
        borderRadius: '50%',
    },
    card_user_cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    card_user_cardContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        padding: '0',
        fontSize: '18px',
    },

    card_user_textColor: {
        color: '#828282',     // #878787
    },
};

function UserCard(props) {
    const user = props.user;
    return (
        <Card style={styles.card_user}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="150"
                    width="150"
                    image="https://i.pinimg.com/236x/93/6b/11/936b11afe328beb8bc2d834e2ccfbe13.jpg"
                    alt="Paella dish"
                    style={styles.card_user_image}
                />
            </CardContent>
            <CardContent style={styles.card_user_cardContainer}>
                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="h6" style={styles.card_user_textColor}>{user.username}</Typography>
                </CardContent>

                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="p" >E-mail:</Typography>
                    <Typography variant="p" style={styles.card_user_textColor}>{user.email}</Typography>
                </CardContent>

                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="p" >Address:</Typography>
                    <Typography variant="p" style={styles.card_user_textColor}>
                        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                    </Typography>
                </CardContent>

                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="p" >Phone:</Typography>
                    <Typography variant="p" style={styles.card_user_textColor}>{user.phone}</Typography>
                </CardContent>

                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="p" >Website:</Typography>
                    <Typography variant="p" style={styles.card_user_textColor}>{user.website}</Typography>
                </CardContent>

                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="p" >Company:</Typography>
                    <Typography variant="p" style={styles.card_user_textColor}>{user.company.name}</Typography>
                </CardContent>

                <CardContent style={styles.card_user_cardContent}>
                    <Typography variant="p" >Company motto:</Typography>
                    <Typography variant="p" style={styles.card_user_textColor}>{user.company.catchPhrase}</Typography>
                </CardContent>
            </CardContent>
        </Card>
    );
}

/*
Имя пользователя: Ervin Howell                                  +
Псевдоним: Antonette                                            +
Электронную почту: Shanna@melissa.tv                            +
Адрес: Victor Plains, Suite 879, Wisokyburgh, 90566-7771        +
Телефон: 010-692-6593 x09125                                    +
Вебсайт: anastasia.net                                          +
Название компании: Deckow-Crist                                 +
Девиз компании: Proactive didactic contingency                  +
*/

/*
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
*/

export default UserCard;
