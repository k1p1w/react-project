import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
	return (
		<section className="Banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome to my Portfolio</span>
						<h1>{`Hi I'm k1p1w`}<span className="wrap">web developer</span></h1>
					</Col>
				</Row>
			</Container>
		</section>
	)
}