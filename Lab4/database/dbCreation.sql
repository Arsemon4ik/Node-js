create TABLE Client
(
    id          SERIAL PRIMARY KEY,
    firstName   varchar(255),
    lastName    varchar(255),
    phoneNumber varchar(255)
);

create TABLE Tour
(
    id        SERIAL PRIMARY KEY,
    name      varchar(255),
    price     varchar(255),
    startDate varchar(255),
    endDate   varchar(255)
);
create TABLE Book
(
    id        SERIAL PRIMARY KEY,
    client_id INTEGER,
    tour_id   INTEGER,
    amount    varchar(255),
    FOREIGN KEY (client_id) references Client (id),
    FOREIGN KEY (tour_id) references Tour (id)
);