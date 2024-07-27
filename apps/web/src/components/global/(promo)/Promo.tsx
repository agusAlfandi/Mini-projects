'use client';

import CreatePromo from '@/components/auth/CreatePromo';
import { Promotion } from '@/utils/interface';

const Promo = ({ event_id }: Promotion): React.ReactElement => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => {
          const modal = document.getElementById(
            'my_modal_1',
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Create Promo
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Promo</h3>
          <div className="py-4">
            <CreatePromo event_id={event_id} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Promo;
