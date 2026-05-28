-- Conectar a la base de datos 'padel&gol'
\c "padel&gol";

-- Crear la tabla 'canchas'
CREATE TABLE canchas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    deporte VARCHAR(100),
    precio NUMERIC(10, 2),
    capacidad INT,
    disponible BOOLEAN DEFAULT true
);

CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    cancha INT REFERENCES canchas(id) ON DELETE CASCADE,
    usuario VARCHAR(100) NOT NULL,
    fecha VARCHAR(20),
    hora VARCHAR(10),
    estado VARCHAR(20) DEFAULT 'Confirmada'
);

-- Insertar 10 canchas
INSERT INTO canchas (nombre, deporte, precio, capacidad, disponible) VALUES
    ('La Bombonera del Barrio', 'Fútbol', 18500, 10, true),
    ('Camp Nou de la Esquina', 'Fútbol', 35000, 22, false),
    ('Estadio del Sol', 'Fútbol', 22000, 14, true),
    ('Predio El 10', 'Fútbol', 18000, 10, true),
    ('Cancha Los Eucaliptos', 'Fútbol', 16500, 10, false),
    ('Padel Point', 'Pádel', 9500, 4, true),
    ('La Pared de Cristal', 'Pádel', 11000, 4, false),
    ('Tie Break Arena', 'Pádel', 10000, 4, false),
    ('Volea Master', 'Pádel', 8500, 4, true),
    ('Estadio Central', 'Tenis', 12000, 2, true);

-- Insertar reservas
INSERT INTO reservas (cancha, usuario, fecha, hora, estado) VALUES
    (1, 'Carlos Rodríguez', '2024-05-10', '19:00', 'Confirmada'),
    (2, 'Federico Gómez', '2024-05-10', '21:00', 'Confirmada'),
    (3, 'Martín Sosa', '2024-05-11', '18:00', 'Confirmada'),
    (4, 'Julián Álvarez', '2024-05-11', '20:00', 'Confirmada'),
    (6, 'Lucía Fernández', '2024-05-10', '17:30', 'Confirmada'),
    (8, 'Esteban Quito', '2024-05-12', '10:00', 'Confirmada');