import React, {Component, PropTypes} from 'react';
export default class SubmitProjectForm extends Component {
  render() {
    return (
      <div>
      <h1 className="page-title text-align-center">Have an idea for a film that you want to make a reality?</h1>
      <h2 className="page-title text-align-center">Fill out the sections below and submit it to our team.</h2>
      <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
              <section className="widget">
                  <div className="body">
                      <div id="wizard" className="form-wizard">
                          <ul className="wizard-navigation nav-justified">
                              <li><a href="#tab1" data-toggle="tab"><small>1.</small><strong> Project Title</strong></a></li>
                              <li><a href="#tab2" data-toggle="tab"><small>2.</small> <strong>Contact Information</strong></a></li>
                              <li><a href="#tab3" data-toggle="tab"><small>3.</small> <strong>Project Details</strong></a></li>
                              <li><a href="#tab4" data-toggle="tab"><small>4.</small> <strong>Thank you!</strong></a></li>
                          </ul>
                          <div id="bar" className="progress progress-small">
                              <div className="progress-bar progress-bar-inverse"></div>
                          </div>
                          <div className="tab-content">
                              <div className="tab-pane" id="tab1">
                                  <form className="form-horizontal mt-sm" action='' method="POST">
                                      <fieldset>
                                          <div className="form-group">
                                              <label className="control-label col-md-3"  for="username">Project Title</label>
                                              <div className="col-md-8">
                                                  <div className="col-md-10">
                                                      <input type="text" id="username" name="username" placeholder="" className="form-control"/>
                                                      <span className="help-block">What do you want your project to be called?</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </fieldset>
                                  </form>
                              </div>
                              <div className="tab-pane" id="tab2">
                                  <form className="form-horizontal mt-sm" action='' method="POST">
                                      <fieldset>
                                        <div className="form-group">
                                            <label className="control-label col-md-3"  for="email">First Name</label>
                                            <div className="col-md-8">
                                                <div className="col-md-10">
                                                    <input type="text" id="fname" name="fname"
                                                           placeholder="" className="form-control"/>
                                                    <span className="help-block">Please provide your first name</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3"  for="email">Last Name</label>
                                            <div className="col-md-8">
                                                <div className="col-md-10">
                                                    <input type="text" id="lname" name="lname"
                                                           placeholder="" className="form-control"/>
                                                    <span className="help-block">Please provide your last name</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3"  for="email">Email</label>
                                            <div className="col-md-8">
                                                <div className="col-md-10">
                                                    <input type="text" id="email" name="email"
                                                           placeholder="" className="form-control"/>
                                                    <span className="help-block">Please provide your e-mail</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3"  for="address">Phone</label>
                                            <div className="col-md-8">
                                                <div className="col-md-10">
                                                    <input type="text" id="phone" name="phone" placeholder="" className="form-control"/>
                                                    <span className="help-block">Please provide your phone number</span>
                                                </div>
                                            </div>
                                        </div>
</fieldset>
                                  </form>
                              </div>
                              <div className="tab-pane" id="tab3">
                                  <form className="form-horizontal mt-sm" action='' method="POST">
                                    <div className="row">
                                      <fieldset>
                                        <div className="col-md-6">
                                                <p>
                                                    Help us better understand your project by selecting the categories below that you feel it best fits and by providing a description to the right. The more throrough your explanination the better we can determine best fit.
                                                </p>
                                                    <div className="col-sm-6">
                                                        <div className="radio">
                                                            <input type="radio" name="radio1" id="radio1" value="option1" checked/>
                                                            <label for="radio1">
                                                                Documentary
                                                            </label>
                                                        </div>
                                                        <div className="radio">
                                                            <input type="radio" name="radio1" id="radio2" value="option2"/>
                                                            <label for="radio2">
                                                                Web Series
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="radio2" id="radio3" value="option1"/>
                                                            <label for="radio3">
                                                                Short Film
                                                            </label>
                                                        </div>
                                                        <div className="radio radio-danger">
                                                            <input type="radio" name="radio2" id="radio4" value="option2" checked/>
                                                            <label for="radio4">
                                                                Feature
                                                            </label>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="col-sm-3 control-label" for="content">
                                                            Description
                                                        </label>
                                                        <div className="col-sm-9">
                                                            <textarea rows="10" className="form-control input-transparent" id="content"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                </fieldset>
                                                </div>
</form>
</div>
                              <div className="tab-pane" id="tab4">
                                  <h2>Thank you!</h2>
                                  <p className="mb-lg">Your submission has been received.</p>
                              </div>
                              <div className="description ml mr mt-n-md">
                                  <ul className="pager wizard">
                                      <li className="previous">
                                          <button className="btn btn-primary pull-left"><i className="fa fa-caret-left"></i> Previous</button>
                                      </li>
                                      <li className="next">
                                          <button className="btn btn-primary pull-right" >Next <i className="fa fa-caret-right"></i></button>
                                      </li>
                                      <li className="finish" style={{display: 'none'}}>
                                          <button className="btn btn-success pull-right" >Finish <i className="fa fa-check"></i></button>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      </div>
              </section>
          </div>
      </div>

      <div className="loader-wrap hiding hide">
          <i className="fa fa-circle-o-notch fa-spin"></i>
      </div>
  </div>
    );
  }
}
