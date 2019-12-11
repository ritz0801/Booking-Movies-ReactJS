import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classNames from 'classnames'
import { connect } from "react-redux";
import _ from "lodash";
import { getCinema } from "../../Actions/Cinema";
import { getShowTimes } from "../../Actions/Cinema";
import "./style.scss";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={2}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function Session(props) {
    const [value, setValue] = React.useState(0);
    let refs = useRef([]);
    let refs2 = useRef([]);

    useEffect(() => {
        if (_.isEmpty(props.cinemaList) && _.isEmpty(props.showTimesList)) {
            props.getCinema();
            props.getShowTimes("GP09");
        }

    }, []);

    const handleChange = newValue => {
        setValue(newValue);
    };

    const toggleActive = location => {
        refs.current.forEach((item, index) => {
            if (location === index) {
                item.classList.add("active");
            } else item.classList.remove("active");
        });
    };
    const toggleActive2 = location => {
        console.log()
        refs2.current.map((item,index) => location === index ? item.classList.add('active') : item.classList.remove('active'))
    };

    const convertTime = time => {
        var d = new Date(time + "Z");
        return d.getUTCHours() + ":" + d.getUTCMinutes();
    };
    // console.log( props.showTimesList)
    return (
        <div className="wrap">
            <div className="col1_wrap">
                {props.cinemaList && props.cinemaList.map((item, index) => {
                    return (
                        <div key={index} className="session_logoCinema_wrap">
                            <img
                                className={classNames("session_logoCinema", { 'active': index === 0 })}
                                src={item.logo}
                                alt=""
                                onClick={() => {
                                    handleChange(index); toggleActive(index);
                                }}
                                ref={img => (refs.current[index] = img)}
                            />
                        </div>
                    );
                })
                }
            </div>

            <div className="col2_wrap">
                {
                    props.showTimesList.map((wrap, index) => {
                        return <TabPanel value={value} index={index} key={index} >
                            {
                                wrap.lstCumRap.map((item, index) => {
                                    return <div key={index} ref={div => refs2.current[index] = div} className={classNames("session_addressCinema_wrap", { 'active': index === 0 })} onClick={() => { toggleActive2(index);  }}>
                                        <p className="titleCinema">{item.tenCumRap}</p>
                                        <p className="addressCinema">{item.diaChi}</p>
                                        <p className="detailCinema"><a href="/">[chi tiết]</a></p>
                                    </div>
                                })
                            }
                        </TabPanel>
                    })
                }
            </div>

            <div className="col3_wrap">
                {

                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cinemaList: state.cinemaList,
        showTimesList: state.showTimes
    };
};

export default connect(mapStateToProps, { getCinema, getShowTimes })(Session);
