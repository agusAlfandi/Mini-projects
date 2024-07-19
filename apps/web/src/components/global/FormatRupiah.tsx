type PramsProps = {
  price?: number | string;
};

const FormatRupiah = ({ price }: PramsProps): React.ReactElement => {
  const format = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(Number(price));

  return <>{format}</>;
};

export default FormatRupiah;
