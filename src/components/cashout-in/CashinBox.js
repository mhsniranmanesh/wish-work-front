import React from 'react';

const CashinBox = ({props}) => {
  return(
    <div className="tab-pane fade show active text-center py-4" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
        <form className="">
            <div className="form-group">
                <label className="col-form-label">مبلغ دلخواه برای واریز را وارد کنید.</label>
                <input type="text" className="form-control" id="" placeholder="مبلغ به ریال"></input>
            </div>
            <button type="submit" className="btn btn-primary btn-rec">
                واریز
            </button>
        </form>
    </div>

  )
};
export default CashinBox;
